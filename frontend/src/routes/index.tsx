import { ModeToggle } from "@/components/mode-toggle";
import { createFileRoute } from "@tanstack/react-router";
import tw, { styled } from "twin.macro";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const title = "اسپارک: اولین پلتفرم فول استک مدرن وب";

function HomePage() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-center text-xl font-black sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <a
        target="_blank"
        className="font-medium text-blue-400 underline"
        href="https://github.com/soheilghanbary/spark"
      >
        <p className="pt-4">سورس پروژه</p>
      </a>
      <div className="mt-4 text-center">
        <ModeToggle />
      </div>
      <Card>
        <Heading>Card Title</Heading>
        <Content>
          this is my Card and i love it twin.macro love it twin.macro Hey this
          is my Card and i love it twin.macro
        </Content>
      </Card>
    </div>
  );
}

type ContentStyledProps = {
  isBold?: boolean;
};

const Card = tw.div`w-fit max-w-xs cursor-pointer space-y-2 rounded-md border bg-card p-4 text-left transition-all hover:shadow-md active:scale-90`;
const Heading = tw.h2`font-semibold text-xl text-blue-500 lg:(text-green-500 hover:text-rose-600)`;
const Content = styled.p<ContentStyledProps>`
  ${tw`text-sm/6`}
  ${({ isBold }) => isBold && tw`font-black`}
`;
