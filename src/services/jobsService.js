import axios from 'axios';

export const getJobs = async () => {
    try {
        const response = await axios.post('https://api.theirstack.com/v1/jobs/search', {
            
                "include_total_results": false,
                "order_by": [
                  {
                    "desc": true,
                    "field": "date_posted"
                  }
                ],
                "posted_at_max_age_days": 15,
                "job_country_code_or": [
                  "BR"
                ],
                "job_title_or": [
                  "Desenvolvedor back end",
                  "Desenvolvedor front end",
                ],
                "page": 0,
                "limit": 10,
                
              }, {
            headers: {
                'Authorization': 'Bearer  <token>',
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar vagas:', error);
        throw error;
    }
};
