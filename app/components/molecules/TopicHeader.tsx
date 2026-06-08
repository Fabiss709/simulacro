import BadgeNumber from "../atoms/BadgeNumber";

export default function TopicHeader() {
    return (
        <div className="bg-red-400 text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <BadgeNumber number={1} />
                <h2 className="text-2xl font-bold">
                    Agenda/Topic
                </h2>
            </div>

            <span>SAAS-0000</span>
        </div>
    );
}