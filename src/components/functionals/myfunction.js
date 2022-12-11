

function FunctHello(params){
    console.log(params)
    return (
        <div>
        <h2>{params.hh}</h2>
        <ul>
            {
                params.myarr.map(arrayItem => <li>{arrayItem}</li>)
            }
            
        </ul>
        </div>
    );
  }

export default FunctHello