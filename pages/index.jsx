import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import { PageLayout, AuthorIntro, CardItem, CardListItem } from "components";
import { getAllBlogs } from "lib/api";
import FilteringMenu from "components/FilteringMenu";

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({ view: { list: 0 } });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col md="9" key={`${blog.slug}-list`}>
              <CardListItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          ) : (
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
          )
        )}
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
