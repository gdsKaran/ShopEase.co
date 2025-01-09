import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Alert({ alert }) {
  return (
    <div className="rounded-md bg-yellow-50 p-2">
      <div className="flex items-center">
        {/* Icon Section */}
        <div className="shrink-0">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400" // Adjusted size classes for the icon
          />
        </div>

        {/* Text Section */}
        <div className="ml-3">
          <div className="text-sm text-yellow-700">
            <span>{alert}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
