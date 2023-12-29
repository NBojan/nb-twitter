import { CreateContainer, Header, PostsContainer } from "./components";

const Home = () => {
  return (
    <section className="min-h-[100vh] flex-1 border-r theme-grayBorder-200-700 max-w-[660px]">
      <Header />
      <CreateContainer />
      <PostsContainer />
    </section>
  );
};

export default Home;

//seo, upload
