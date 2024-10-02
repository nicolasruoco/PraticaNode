import styles from "./Product.module.css";

export default function Product({image, title, description, color}){

    if(color == 'Amarelo'){
        const useColor = "#FDB215"
    }
    else{
        const useColor = "#DA323D"
    }

    return(
        <div className={styles.container}>
            <img src={image} alt="Product Image" className={styles.image}/>
            <p className={styles.title}>{title}</p>
            <p className={styles.description} styles="{color: {useColor}}">{description}</p>
            <div className={styles.button}>Buy Now</div>
        </div>

    )
}