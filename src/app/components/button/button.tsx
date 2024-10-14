import  styles from './button.module.css';

type Props = {
    title: string | number;
    clName?: string;
    children?: React.ReactDOM;
}

export default function Button(props: Props){

    const classNames = [styles.container];

    if(props.clName){
        classNames.push(props.clName);
    }

    return(
        <button className={classNames.join(' ')}>
            {props.title}
        </button>
    )
}