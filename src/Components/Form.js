import Input from './Input'
import styles from './Form.module.css'

function Form(){
    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome de usuário ou email"
                name = "name"
                placeholder="Insira o nome ou email"
            />
            <Input
                type="password"
                text="Senha"
                name = "name"
                placeholder="Insira a sua senha"
            />
        </form>
    )
}

export default Form 