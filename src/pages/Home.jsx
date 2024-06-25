import PageTitle from "../components/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <PageTitle>
        Task manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>Here you can add your tasks</p>
    </div>
  );
}
