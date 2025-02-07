import { useEffect, useState } from 'react';
import { CheckCircle, Circle, Loader, PlusCircle, X } from 'lucide-react';
import { ApiCandidatura } from '../services/candidaturaService';
import { toast } from 'react-toastify';

export const ProgressSteps = ({ idCandidatura, status, refreshJobs }) => {
  const [steps, setSteps] = useState(status);
  const [currentStep, setCurrentStep] = useState(1);
  const [newStepLabel, setNewStepLabel] = useState('');
  const [newSteps, setNewSteps] = useState([]);
  const [idUpdate, setIdUpdate] = useState(0);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [modalNewStep, setModalNewStep] = useState(false);
  const [modalConfirmUpdate, setModalConfirmUpdate] = useState(false);

  const { updateCandidaturaStatus, addCandidaturaNewStatus } = ApiCandidatura();

  useEffect(() => {
    const nextStep = steps.find((step) => !step.completed);

    if (nextStep) {
      setCurrentStep(nextStep.id);
    }
  }, [steps]);

  const addStep = () => {
    if (newStepLabel.trim() === '') return;

    const isStepExist = steps.some(
      (step) => step.label.toLowerCase() === newStepLabel.trim().toLowerCase()
    );

    if (isStepExist) {
      toast.error('Este passo já existe!');
      return;
    }

    const newStep = {
      id: steps.length + 1,
      label: newStepLabel,
      completed: false,
    };

    setSteps((prevSteps) => [...prevSteps, newStep]);
    setNewSteps((prevNewSteps) => [...prevNewSteps, newStep]);

    setNewStepLabel('');
    setCurrentStep(steps.length + 1);
    refreshJobs();
  };

  const markCompleted = (stepId) => {
    const stepIndex = steps.findIndex((step) => step.id === stepId);
  
    if (stepIndex > 0 && !steps[stepIndex - 1].completed) {
      return;
    }
  
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        const prev = step.id === stepId ? { ...step, completed: true } : step;
        return prev;
      })
    );
  
    const nextStep = steps.find((step) => !step.completed);
    if (nextStep) {
      setCurrentStep(nextStep.id);
    }
  
    setUpdateStatus(true);
  };

  useEffect(() => {
    if (updateStatus) {
      atualizarStatus(steps);
      refreshJobs();
    }
  }, [updateStatus]);

  useEffect(() => {
    if (newSteps.length > 0) {
      async function adicionarNovoStatus() {
        const data = await addCandidaturaNewStatus(idCandidatura, newSteps);

        setNewSteps([]);
        setModalNewStep(false);
        refreshJobs();  // Recarrega os dados após adicionar uma nova etapa
      }

      adicionarNovoStatus();
    }
  }, [newSteps]);

  async function atualizarStatus(stepsUpdated) {
    const data = await updateCandidaturaStatus(idCandidatura, stepsUpdated);
    setModalConfirmUpdate(false);
    setUpdateStatus(false);
  }

  function confirmUpdate(id) {
    const isCurrent = id === currentStep;
    if (!isCurrent) {
      return;
    }

    setIdUpdate(id);
    setModalConfirmUpdate(true);
  }

  return (
    <div className='flex flex-col items-center space-y-4 p-4'>
      <div className='flex flex-wrap items-center gap-4'>
        {steps.map((step, index) => {
          const isCompleted = step.completed;
          const isCurrent = step.id === currentStep;

          return (
            <div key={step.id} className='flex items-center space-x-2'>
              {isCompleted ? (
                <CheckCircle className='text-green-500' size={24} />
              ) : isCurrent ? (
                <Loader className='text-blue-500 animate-spin' size={24} />
              ) : (
                <Circle className='text-gray-300' size={24} />
              )}

              <span
                className={`text-sm cursor-pointer ${
                  isCurrent ? 'font-bold text-blue-500' : 'text-gray-300'
                }`}
                onClick={() => confirmUpdate(step.id)}
              >
                {step.label}
              </span>

              {index < steps.length - 1 && (
                <div
                  className={`w-10 h-1 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className='flex space-x-2'>
        <button
          onClick={() => setModalNewStep(true)}
          className='flex items-center space-x-2 text-blue-600'
        >
          <PlusCircle size={20} /> <span>Adicionar Etapa</span>
        </button>
      </div>

      {modalConfirmUpdate && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white dark:bg-[#151419] rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6 space-y-4'>
            <div className='flex justify-between items-start border-b pb-3'>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Atualizar Etapa
                </h2>
                <p className='text-sm dark:text-zinc-300'>
                  Clique em <strong>Atualizar Status</strong> caso tenha
                  avançado nessa etapa do processo seletivo
                </p>
              </div>

              <button
                onClick={() => setModalConfirmUpdate(false)}
                className='text-blue-600 hover:text-blue-800 transition-colors'
              >
                <X />
              </button>
            </div>

            <div className='flex space-x-2'>
              <button
                onClick={() => setModalConfirmUpdate(false)}
                className='flex items-center h-10 space-x-2 text-white bg-red-500 px-2 rounded-md hover:bg-red-600 transition-colors'
              >
                <span>Cancelar</span>
              </button>
              <button
                onClick={() => markCompleted(idUpdate)}
                className='flex items-center h-10 space-x-2 text-white bg-blue-500 px-2 rounded-md hover:bg-blue-600 transition-colors'
              >
                <span>Atualizar status</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {modalNewStep && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white dark:bg-[#151419] rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6 space-y-4'>
            <div className='flex justify-between items-start border-b pb-3'>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Adicionar Nova Etapa
                </h2>
                <p className='text-base dark:text-white'>
                  Adicione novas etapas do processo seletivo
                </p>
              </div>

              <button
                onClick={() => setModalNewStep(false)}
                className='text-blue-600 hover:text-blue-800 transition-colors'
              >
                <X />
              </button>
            </div>

            <div className='flex space-x-2'>
              <input
                type='text'
                value={newStepLabel}
                onChange={(e) => setNewStepLabel(e.target.value)}
                placeholder='Nome da etapa'
                className='border p-2 rounded'
              />
              <button
                onClick={addStep}
                className='flex items-center space-x-2 text-white bg-blue-500 px-2 rounded-md hover:bg-blue-600 transition-colors'
              >
                <PlusCircle size={20} /> <span>Adicionar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
