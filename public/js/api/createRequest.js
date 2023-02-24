/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  
  createRequest({
    url: '/createRequest',
    data: {
      email: 'demo@demo.ru',
      password: 'demo'
    },
    responseType: 'json',
    method: 'POST',
  }); 

  callback: (err, response) => {
    console.log(err); 
    console.log(response); 
  }

  try {
    xhr.open(method, url);
    xhr.send(data);
  }
  catch (error) {
    callback(error);
  }
};
