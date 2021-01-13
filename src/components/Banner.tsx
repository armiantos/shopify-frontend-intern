import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export type BannerProps = {
    content: string;
    open: boolean;
    setOpen: (open: boolean) => void;
};

function Banner({ content, open, setOpen }: BannerProps) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default Banner;
