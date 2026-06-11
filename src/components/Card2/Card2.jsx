import style from './Card2.module.css'
import sole from './sole.svg';

export default function Card2() {
    return (
        <section className={style.container} id={style.prova2}>
            <figure>
                <img src={sole} alt="immagine" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis accusantium aliquid placeat suscipit dolorem ipsa, tenetur aperiam, consequatur temporibus ab sequi error, recusandae neque quos rem? Delectus, minus dolores!</p>
        </section>
    );
}