import api from "../services/axios.config";
import { Response, Request } from "express"; // Assuming you are using Express.js
const token = localStorage.getItem("@token");
// tirar o D se houver no começo do arquivo e colocar no outro arquivo axios.routes, pra usar o backend localmente

// tirar o D se houver no começo do arquivo e colocar no outro arquivo axios.routes, pra usar o backend no servidor online, o qual deve estar em execução

// estacoes
export const getEstacoes = async () => {
  try {
    const response = await api.get("/station", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getEstacoesId = async (id: any) => {
  try {
    const response = await api.get("/station/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const postEstacoes = async (data: any) => {
  try {
    const response = await api.post("/station", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const putEstacoes = async (data: any) => {
  try {
    const response = await api.put("/station", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteEstacoes = async (id: any) => {
  try {
    const response = await api.delete("/station/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response;
  } catch (error) {
    return error;
  }
};


/////////////////////////////////////////////////////////////

// tipo parametro parametros
export const postTypeParameter = async (data: any) => {
  try {
    const response = await api.post("/typeparameter", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const getTipoParametros = async () => {
  try {
    const response = await api.get("/typeparameter", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTipoParametroID = async (id: any) => {
  try {
    const response = await api.get(`http://localhost:3001/typeparameter/${id}`, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};


export const putTypeParameter = async (data: any) => {
  try {
    const response = await api.put("/typeparameter", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const deleteTypeParameter = async (id: any) => {
  try {
    const response = await api.delete("/typeparameter/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response;
  } catch (error) {
    return error;
  }
};

/////////////////////////////////////////////////////////////

export const postUsuario = async (data: any) => {
  try {
    const response = await api.post("/user", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}


export const deleteUsuario = async (id: any) => {
  try {
    const response = await api.delete("/user/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response;
  } catch (error) {
    return error;
  }
}

export const updateUsuario = async (data: any) => {
  try {
    const response = await api.put("/user", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getUsuarioEmail = async (email: any) => {
  try {
    const response = await api.get("/user/email/" + email, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}


/////////////////////////////////////////////////////////////

export const login = async (data: any) => {
  try {
    const response = await api.post("/login", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}


export const postAlertas = async (data: any) => {
  try {
    const response = await api.post("/alert", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getAlertas = async () => {
  try {
    const response = await api.get("/alert", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetUsers = async () => {
  try {
    const response = await api.get("/user", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUserId = async (id: any) => {
  try {
    const response = await api.get("/user/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};
///////////////////////////////////////////////////////////////////////////////////
// parametros
export const postParameter = async (data: any) => {
  try {
    const { fk_tipo_parametro, fk_estacao } = data;
    for (let i = 0; i < fk_tipo_parametro.length; i++) {
      console.log(fk_tipo_parametro[i])
      await api.post("/parameter", {
        fk_estacao: parseInt(fk_estacao),
        fk_tipo_parametro: parseInt(fk_tipo_parametro[i]),
      }, {
        headers: {
          "x-api-key": "4554545sdsdsd5454",
          'Authorization': `Bearer ${token}`
        },

      });
    }
    return data;
  } catch (error) {
    return error;
  }
}


export const getParameters = async () => {
  try {
    const response = await api.get("/parameter/", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};


export const getParameter = async (id: any,selecionado: any) => {
  try {
    const response = await api.get("/parameter/fkparameter/" + id + selecionado, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getParameterID = async (id: any) => {
  try {
    const response = await api.get("/parameter/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteParameter = async (data: any) => {
  try {
    const {tipoParametroEstacao, selectStationId}= data;
    // const response = await api.get("/station/" + id, {
    //   headers: {
    //     "x-api-key": "4554545sdsdsd5454",
    //     'Authorization': `Bearer ${token}`,
    //   },
    // })
    // const { parametros } = response.data;
    // console.log(parametros);
    
    // for (let i = 0; i < parametros.length; i++) {
    //   const pon = await api.delete("/parameter/" + parametros[i], {
    //     headers: {
    //       "x-api-key": "4554545sdsdsd5454",
    //       'Authorization': `Bearer ${token}`,
    //     },
    //   });
    //   console.log(pon);
    // }

  } catch (error) {
    return error;
  }
};

/////////////////////////////////////////////////////////////////////////////////////






export const getDashboard = async (id: any) => {
  try {
    const response = await api.get("/dashboard/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const getNometabela = async (id: any) => {
  try {
    const response = await api.get("/dashboard/nometabela/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}


export const gethistoric = async () => {
  try {
    const response = await api.get("/historicalert", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
        'Authorization': `Bearer ${token}`,
      },

    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}
