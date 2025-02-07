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
        limit: 10,
        blur_company_data: false,
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpZ29yc29icmFsLmRldkBnbWFpbC5jb20iLCJwZXJtaXNzaW9ucyI6InVzZXIifQ._0r2rm8EYZuyY7nDVmdTiZUrXMpdv12yWXQ3UUEkMeU',
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
