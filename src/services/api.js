// src/services/api.js
const API_BASE_URL = 'http://localhost:8080/api/phones';


export const getMobilePhones = async () => {
  const response = await fetch(API_BASE_URL, {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error('Error al obtener los teléfonos');
  }
  return await response.json();
};

export const getMobilePhoneById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener el teléfono');
  }
  return await response.json();
};

export const createMobilePhone = async (phoneData) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(phoneData),
  });
  if (!response.ok) {
    throw new Error('Error al crear el teléfono');
  }
  return await response.json();
};

// Puedes añadir más métodos para update y delete según necesites