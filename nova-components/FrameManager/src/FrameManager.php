<?php

namespace Acme\FrameManageer;

use Laravel\Nova\ResourceTool;

class FrameManageer extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Frame Manageer';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'frame-manageer';
    }
}
