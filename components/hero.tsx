interface HeroProps {
    title: string;
    subtitle: string;
    imageOn?: boolean
}

export function Hero({ title, subtitle, imageOn=false }: HeroProps) {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {imageOn && <figure> [画像] </figure>}
        </>
    );
}
