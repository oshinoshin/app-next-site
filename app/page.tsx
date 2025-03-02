import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

export default function Home() {
    return (
        <Container>
            <Layout>
                <Hero title="CUBE" subtitle="TOPページ" imageOn />
            </Layout>
        </Container>
    );
}
