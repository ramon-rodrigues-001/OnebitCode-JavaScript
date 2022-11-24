/* Uma function contrutora ela vai criar um obj:
Esse tipo de função deve ter um nome em PascalCase = SomarNumeros
o codigo dentro dessa função deve referenciar a propria função com this.
*/

function Book(title, pages, tegs, author) {
    this.title = title
    this.pages = pages
    this.tegs = tegs
    this.author = author
    this.public = false
    this.unided = 0
    
    this.addUnided = (Q)=> {
        this.unided += Q
        
        if (this.unided > 0) {
            this.public = true
        }
    }
}

const tegs = ['Aventura', 'RPG', 'Medieval']

const livro = new Book('Exiled Kingdoms', 230, tegs, 'Ramon')
livro.addUnided(28)


console.log(livro)
