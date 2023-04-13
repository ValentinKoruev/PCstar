import Image from 'next/image';
import styles from './RatingCard.module.scss';

const RatingCard = ({name, rating, comment} : {name: string, rating: number, comment: string}) => {

    const formatRating = (rating : number) => {
        switch(rating) {
            case 1: return 'Много слабо';
            case 2: return 'Слабо';
            case 3: return 'Средно';
            case 4: return 'Много Добро';
            case 5: return 'Отлично';
        }
    }

    return <div className={styles.ratingCardContainer}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.starsContainer}>
            {
                Array.from({length: rating}, (_, idx) => {
                    return <Image src='/icons/misc/star.png' alt='star icon' width={24} height={24}/>
                })
            }
        </div>
        <span className={styles.ratingLabel}>{formatRating(rating)}</span>
        <p className={styles.comment}>{comment}</p>
    </div>
}


export default RatingCard;


/*
star
<a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>

*/