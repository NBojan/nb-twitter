import { Links, Logo, TweetButton, UserProfile } from "..";

const LeftSidebar = () => {
    return (
        <section className="hidden sm:block w-[80px] xl:w-[270px] border-r theme-grayBorder-200-700" id="leftSidebar">
            <article className="fixed h-full w-[80px] xl:w-[270px] flex flex-col justify-between pb-3 xl:pr-8">
                <div className="flex flex-col items-center xl:items-stretch">
                    <Logo />

                    <Links />
                    <TweetButton />
                </div>

                <UserProfile />
            </article>
        </section>
    );
}
 
export default LeftSidebar;