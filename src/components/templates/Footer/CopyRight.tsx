import React from "react";

import { Text } from "@/components/atoms";
import { formattedYear } from "@/utils/functions";

export function CopyRight() {
  return (
    <div className="grid place-items-center px-4 py-8 screen-sm:px-2 screen-sm:py-4">
      <Text variant="lg" className="font-500 text-gray-600 dark:text-white-300">
        &copy;{formattedYear()} All rights reserved
      </Text>
    </div>
  );
}
