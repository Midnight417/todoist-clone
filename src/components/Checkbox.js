import { firebase } from "../firebase"

export const Checkbox = ({id}) => {
    const archiveTasks = () => {
        firebase
            .firestore()
            .collection("tasks")
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTasks()}
        >
            <span className="checkbox"></span>
        </div>
    );
};