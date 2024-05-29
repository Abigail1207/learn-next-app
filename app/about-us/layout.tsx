import { Metadata } from "next";
import Navigation from "../../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s| Next Movies",
    default: "Loading",
  },
  description: "The best movies on the best",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS is great
    </div>
  );
}

// about us 페이지에만 레이아웃!여기에 layout도 들어가 있다. 상위폴더에 레이아웃있다면 이 레이아웃을 하위 항목으로 레이아웃을 적용시키는 것이다. 상쇄되는것이 아니라. 중첩가능
// root 레이아웃 가져와 무언가 렌더링 할 준비를 한다. 그 다음 URL을 가져온다. about-us폴더로 간다. 여기에 레이아웃폴더 있는지 확인하고 있는걸 확인. 전체 폴더에서부터
// 하위 폴더까지 레이아웃 URL을 통해 폴더로 가서 그 폴더에 레이아웃이 있는지 확인한다.
