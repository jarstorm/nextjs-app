import styles, {globalStyles} from "./styles"

type Props = {
    title?: string,
    children: JSX.Element,
};

export default function Layout({ children }: Props) {
    return (
        <>
            <div>
                <main className="">
                    {children}
                </main>
            </div>

            <style jsx global>{globalStyles}</style>

            <style jsx>{styles}</style>
        </>
    )
}
