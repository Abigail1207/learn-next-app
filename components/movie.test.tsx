import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Movie from "./movie";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("movie", () => {
  it("renders a component", () => {
    render(
      <Movie
        id={"testId"}
        poster_path={
          "https://image.tmdb.org/t/p/w780/gKkl37BQuKTanygYQG1pyYgLVgf.jpg"
        }
        title={"testTitle"}
      />
    );

    const heading = screen.getByText("testTitle");
    expect(heading).toBeInTheDocument();
  });

  // it("changes page when the image is clicked", async () => {
  //   render(
  //     <Movie
  //       id={"testId"}
  //       poster_path={
  //         "https://image.tmdb.org/t/p/w780/gKkl37BQuKTanygYQG1pyYgLVgf.jpg"
  //       }
  //       title={"testTitle"}
  //     />
  //   );
  //   const img = screen.getByAltText("testTitle");
  //   expect(img).toBeInTheDocument();
  //   await userEvent.click(img);
  // });
});
