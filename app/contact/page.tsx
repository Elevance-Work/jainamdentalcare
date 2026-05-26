import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Contact Us" isGroup={false} linkGroup="" pageGroup="" current="Contact Us" />
        <Section1 />
        {/* <Section9 /> */}
      </Layout>
    </>
  );
}
