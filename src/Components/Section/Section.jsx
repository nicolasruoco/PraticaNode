import styles from "./Section.module.css";

import Product from "../Product/Product"

export default function Section({title, products}){
    return(
        <div className={styles.section}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.container}>
                {products.map((product) => (
                    <Product image={product.image} title={product.title} description={product.description}></Product>
                ))}
            </div>

        </div>
        
    )
}