import { NewsWidget, SearchWidget, FollowsWidget } from "..";

const Widgets = () => {
    return (
        <section id="rightSidebar" className="hidden lg:block w-[350px] pl-8">
            <SearchWidget />
            <NewsWidget />
            <FollowsWidget />
        </section>
    );
}
 
export default Widgets;