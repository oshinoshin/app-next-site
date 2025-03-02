import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

export default function About() {
    return (
        <Container>
            <Layout>
                <Hero title="About" subtitle="アバウトページです" />
            </Layout>
        </Container>
    );
}
