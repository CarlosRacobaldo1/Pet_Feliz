import Input from './Input'
import styles from './FormCad.module.css'

function FormCad(){
    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome completo"
                name = "name"
                placeholder="Insira o nome completo"
            />

            <Input
                type="email"
                text="Email"
                name = "name"
                placeholder="Insira o email"
            />

            <div className={styles.lado}>
                <Input
                    type="tel"
                    text="CPF"
                    name = "name"
                    placeholder="___.___.___-__"
                    />

                <Input
                    type="date"
                    text="Data de nascimento"
                    name = "name"
                    placeholder="__/__/____"
                    />
                
                <Input
                    type="teç"
                    text="Telefone"
                    name = "name"
                    placeholder="() 9____-____"
                    />
            </div>

            <div className={styles.lado}>
                <Input
                    type="password"
                    text="Senha"
                    name = "name"
                    placeholder="Insira a sua senha"
                    />

                <Input
                    type="password"
                    text="Confirmar senha"
                    name = "name"
                    placeholder="Confirme a sua senha"
                    />
            </div>
        </form>
    )
}

export default FormCad 