import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true, // API utiliza cookies para a autenticação
    headers: {
        'Content-Type': 'application/json', // Tipo de dados recebidos pela API 
        'Access-Control-Allow-Origin': '*', // Permite todas as origens configuradas no servidor(endpoints)
    }
})
