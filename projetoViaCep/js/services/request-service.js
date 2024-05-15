import RequestException from "./exceptions/request-exception.js";

/* função assincrona que espera o resultado da api externa
e transforma o resultado em json
*/
export async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro ao realizar requisição");
  }
}
