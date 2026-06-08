type Props = {
    number: number;
};

export default function BadgeNumber({ number }: Props) {
    return (
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            {number}
        </div>
    );
}