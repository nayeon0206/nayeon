class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


async function loadJson(url) {
	
  let response = await fetch(url);
  if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function koreanMovie() {

  let title;
  while(true) {
	
    try {
      res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("무언가 에러가 발생했군요!");
      } else {
        throw err;
      }
    }
  }


  alert(`${res.author}: ${res.quote}`);
  return res;
}

koreanMovie();