import axios from 'axios';

export const getJobs = async () => {
  try {
    const response = await axios.post(
      'https://api.theirstack.com/v1/jobs/search',
      {
        include_total_results: false,
        order_by: [
          {
            desc: true,
            field: 'date_posted',
          },
        ],
        posted_at_max_age_days: 15,
        job_country_code_or: ['BR'],
        job_title_or: ['Desenvolvedor back end', 'Desenvolvedor front end'],
        page: 0,
        limit: 4,
        blur_company_data: false,
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGV4YW5kcnlicml0by5kZXZAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIn0.KWO5BtgMaZRHyKqi0IghP0HR1KLCIoUXTChOMEjVjfI',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vagas:', error);
    throw error;
  }
};
