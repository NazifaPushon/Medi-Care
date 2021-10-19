// this is a simple label components g
const Checkbox = ({ text }) => {
    return (
        <label className="inline-flex items-center mt-3">
            <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">{text}</span>
        </label>
    )
}

export default Checkbox;