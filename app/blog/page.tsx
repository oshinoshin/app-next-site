import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

export default function Blog() {
    return (
        <Container>
            <Layout>
                <Hero title="Blog" subtitle="ブログページ" />
            </Layout>
        </Container>
    );
}
