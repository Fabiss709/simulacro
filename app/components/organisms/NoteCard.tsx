import TopicHeader from "../molecules/TopicHeader";

export default function NoteCard() {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl">
            <TopicHeader />

            <div className="p-8">
                Description of what is done here
            </div>

            <div className="border-t p-4 flex justify-between">
                <span>Last Updated</span>
                <span>3/8/2020</span>
            </div>
        </div>
    );
}