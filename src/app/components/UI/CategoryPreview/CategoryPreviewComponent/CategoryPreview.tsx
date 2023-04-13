import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryPreview.module.scss';



const CategoryPreview = ({title, link, imageSrc} : {title: string, link : string, imageSrc : string}) => {


    return <li className={styles.previewElement}>
        <Link className={styles.previewLink} href={link}>
            <div className={styles.imageWrapper}>
                <Image src={imageSrc} alt={title} fill={true}/>
            </div>
            <span className={styles.previewTitle}>{title}</span>
        </Link>
    </li>
}

export default CategoryPreview;