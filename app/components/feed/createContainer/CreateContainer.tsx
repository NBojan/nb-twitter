import { CreatePost } from "../..";

const CreateContainer = () => {
    return (
        <div className="p-3 border-b theme-grayBorder-200-700">
            <CreatePost inputId="forFile" isModal={false} />
        </div>
    );
}
 
export default CreateContainer;