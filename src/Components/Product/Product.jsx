import styles from "./Product.module.css";

export default function Product({image, title, description, color}){

    return(
        <div className={styles.container}>
            <img src={image} alt="Product Image" className={styles.image}/>
            <p className={styles.title}>{title}</p>
            <p className={styles.description} styles="{color: ${color}}">{description}</p>
            <div className={styles.button}>Buy Now</div>
        </div>

    )
}