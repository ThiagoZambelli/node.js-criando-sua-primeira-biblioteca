const extraiLinks = (arrLinks) => {
    return arrLinks.map(link => Object.values(link).join())
}

async function validaStatus(arrUrl) {
    const arrStatus = await Promise.all(
        arrUrl.map(async (url) => {
            try{
                const res = await fetch(url,{method: 'HEAD'});
                return res.status;
            }catch(erro){
                return manejaErros(erro);
            }
        })
    )
    return arrStatus;
}
function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'Link não encontrado:'
    }else{
        return 'Ocorreu um erro'
    }
    
}

export default async function listaValidada(listaLinks) {
    const links = extraiLinks(listaLinks);
    const status = await validaStatus(links);


    return listaLinks.map((link, i) => ({
        ...link,
        status: status[i],
    }))
}