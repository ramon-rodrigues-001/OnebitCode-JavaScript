import { useEffect } from 'react';
import './PaginaBackend.scss';


export default function PaginaBackend() {



    useEffect(() => {
        // Esta função será executada quando o componente for montado
        const forms = document.querySelectorAll('.needs-validation');

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = {
            ImgUrl: e.target.urlData.value,
            nome: e.target.nomeData.value,
            valorAntigo: e.target.antigoValorData.value,
            valorAtual: e.target.atualValorData.value
        }

        // const 

        console.log(formData.ImgUrl)
        
        try {
            const response = await fetch('http://localhost:4000/api/salvar-produto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  
                },
                body: JSON.stringify(formData),
            }) 
        }
        catch (error) {
            console.error('Erro:', error);
        }
    }



    return (
        <>
            <section className='sectionPaginaDoBackend'>
            <form class="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div class="col-md-4">
                    <label for="urlData" class="form-label">URL da imagen...</label>
                    <input type="text" class="form-control" id="urlData" placeholder='https//' required />
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>


                <div class="col-md-4">
                    <label for="nomeData" class="form-label">Nome do produto...</label>
                    <input type="text" class="form-control" id="nomeData" placeholder='Nome' required />
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>


                <div class="col-md-4">
                    <label for="antigoValorData" class="form-label">Valor antes do desconto. valor inteiro ex: 10</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">R$</span>
                    <input type="number" class="form-control" id="antigoValorData" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                        Favor preencher valor <s>antigo</s> do produto.
                    </div>
                    </div>
                </div>


                <div class="col-md-4">
                    <label for="atualValorData" class="form-label">Valor antes do desconto. valor inteiro ex: 10</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">R$</span>
                    <input type="number" class="form-control" id="atualValorData" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                        Favor preencher valor atual do produto.
                    </div>
                    </div>
                </div>


                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label" for="invalidCheck">
                        Comfirmar Produto
                    </label>
                    <div class="invalid-feedback">
                        Comfirme que o produto esta correto.
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="/" class="btn btn-primary">Cancelar produto</a>
                    <button class="btn btn-primary mx-3" type="submit" >Criar produto</button>
                </div>
            </form>
            </section>


            
        </>
    )
}
