import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer s324nykbsogqZkUp6eD_jVoI4DpAuY0aUNn15jFXpa7nox1FVqrWQ5lcaiZertWZSe-vUl-a3NiI11_3nB8QWmST7AMnpoHinCiy1KOTGptKXn7k6n_wIX67-2KlXnYx'
    }
});
