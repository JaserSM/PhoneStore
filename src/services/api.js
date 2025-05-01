// src/services/api.js
const API_BASE_URL = 'https://itx-frontend-test.onrender.com/api/';


export const getMobilePhones = async () => {
  const response = await fetch(API_BASE_URL + "product", {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error('Error al obtener los teléfonos');
  }
  return await response.json();
};

export const getMobilePhoneById = async (id) => {
  const response = await fetch(`${API_BASE_URL}product/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener el teléfono');
  }
  return await response.json();
};

export const addPhoneToCart = async (phoneData) => {
  const response = await fetch(API_BASE_URL + "cart", {
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