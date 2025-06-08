import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

registerBlockType('respimgsw/responsive-image-switcher', {
    title: __('Responsive Image Switcher', 'responsive-image-switcher'),
    icon: 'images-alt2',
    category: 'media',
    attributes: {
        imageId: {
            type: 'number',
            default: 0
        },
        mobileImageId: {
            type: 'number',
            default: 0
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const { imageId, mobileImageId } = attributes;

        const desktopImage = useSelect((select) => {
            if (!imageId) return null;
            const media = select(coreStore).getMedia(imageId);
            return media ? media.source_url : null;
        }, [imageId]);

        const mobileImage = useSelect((select) => {
            if (!mobileImageId) return null;
            const media = select(coreStore).getMedia(mobileImageId);
            return media ? media.source_url : null;
        }, [mobileImageId]);

        const onSelectDesktopImage = (media) => {
            setAttributes({ imageId: media.id });
        };

        const onSelectMobileImage = (media) => {
            setAttributes({ mobileImageId: media.id });
        };

        return (
            <>
                <div>
                    <p>{__('Select an image for desktop (≥ 768px):', 'responsive-image-switcher')}</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectDesktopImage}
                            value={imageId}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <Button onClick={open} variant="primary">
                                    {imageId ? 
                                        __('Replace Desktop Image', 'responsive-image-switcher') : 
                                        __('Select Desktop Image', 'responsive-image-switcher')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    {imageId && desktopImage ? (
                        <img
                            src={desktopImage}
                            alt={__('Desktop image preview', 'responsive-image-switcher')}
                            style={{ maxWidth: '100%' }}
                        />
                    ) : imageId ? (
                        <p>{__('Loading image...', 'responsive-image-switcher')}</p>
                    ) : null}
                </div>

                <InspectorControls>
                    <PanelBody title={__('Mobile Settings', 'responsive-image-switcher')}>
                        <p>{__('Select an image for mobile (< 768px):', 'responsive-image-switcher')}</p>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMobileImage}
                                value={mobileImageId}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} variant="primary">
                                        {mobileImageId ? 
                                            __('Replace Mobile Image', 'responsive-image-switcher') : 
                                            __('Select Mobile Image', 'responsive-image-switcher')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {mobileImageId && mobileImage ? (
                            <img
                                src={mobileImage}
                                alt={__('Mobile image preview', 'responsive-image-switcher')}
                                style={{ maxWidth: '100%', marginTop: '10px' }}
                            />
                        ) : mobileImageId ? (
                            <p>{__('Loading image...', 'responsive-image-switcher')}</p>
                        ) : null}
                    </PanelBody>
                </InspectorControls>
            </>
        );
    },
});