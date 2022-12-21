import { Row, Col } from "react-bootstrap";
import { PageLayout, AuthorIntro, CardItem, CardListItem } from "components";
import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
              link={{
                href: "/blogs/[slug]",
                as: `/blogs/${blog.slug}`,
              }}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  console.log("Calling getStaticProps");
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
