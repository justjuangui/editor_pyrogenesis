#ifndef INCLUDED_SHADOWS
#define INCLUDED_SHADOWS

#include "common/stage.h"

#if USE_SHADOW

#if USE_SHADOW_SAMPLER
#define SHADOWS_TEXTURES(START_LOCATION) \
	TEXTURE_2D_SHADOW(START_LOCATION, shadowTex)
#else
#define SHADOWS_TEXTURES(START_LOCATION) \
	TEXTURE_2D(START_LOCATION, shadowTex)
#endif

#if SHADOWS_CASCADE_COUNT == 1
#define SHADOWS_UNIFORMS \
	UNIFORM(vec4, cameraForward) \
	UNIFORM(vec4, shadowScale) \
	UNIFORM(mat4, shadowTransform) \
	UNIFORM(float, shadowDistance)

#define SHADOWS_VERTEX_OUTPUTS(START_LOCATION) \
	VERTEX_OUTPUT(START_LOCATION + 0, float, v_depth); \
	VERTEX_OUTPUT(START_LOCATION + 1, vec4, v_shadow);
#else // SHADOWS_CASCADE_COUNT == 1
#define SHADOWS_UNIFORMS \
	UNIFORM(vec4, cameraForward) \
	UNIFORM(vec4, shadowScale) \
	UNIFORM(mat4, shadowTransforms[SHADOWS_CASCADE_COUNT]) \
	UNIFORM(float, shadowDistances[SHADOWS_CASCADE_COUNT])

#define SHADOWS_VERTEX_OUTPUTS(START_LOCATION) \
	VERTEX_OUTPUT(START_LOCATION + 0, float, v_depth); \
	VERTEX_OUTPUT(START_LOCATION + 1, vec4, v_shadow[SHADOWS_CASCADE_COUNT]);
#endif // SHADOWS_CASCADE_COUNT == 1

#endif // USE_SHADOW

#endif // INCLUDED_SHADOWS
