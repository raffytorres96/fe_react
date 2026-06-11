import style from './Card.module.css'

export default function Card() {
    return (
        <section className={style.container}>
            <figure>
                <img src="sole.svg" alt="" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis accusantium aliquid placeat suscipit dolorem ipsa, tenetur aperiam, consequatur temporibus ab sequi error, recusandae neque quos rem? Delectus, minus dolores!</p>
        </section>
    );
}