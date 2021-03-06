# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class Container(pulumi.CustomResource):
    attach: pulumi.Output[bool]
    """
    If true attach to the container after its creation and waits the end of his execution.
    """
    bridge: pulumi.Output[str]
    """
    The network bridge of the container as read from its NetworkSettings.
    """
    capabilities: pulumi.Output[dict]
    """
    See Capabilities below for details.
    """
    command: pulumi.Output[list]
    """
    The command to use to start the
    container. For example, to run `/usr/bin/myprogram -f baz.conf` set the
    command to be `["/usr/bin/myprogram", "-f", "baz.conf"]`.
    """
    container_logs: pulumi.Output[str]
    """
    The logs of the container if its execution is done (`attach` must be disabled).
    """
    cpu_set: pulumi.Output[str]
    """
    A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
    """
    cpu_shares: pulumi.Output[int]
    """
    CPU shares (relative weight) for the container.
    """
    destroy_grace_seconds: pulumi.Output[int]
    """
    If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
    """
    devices: pulumi.Output[list]
    """
    See Devices below for details.
    """
    dns: pulumi.Output[list]
    """
    Set of DNS servers.
    """
    dns_opts: pulumi.Output[list]
    """
    Set of DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
    """
    dns_searches: pulumi.Output[list]
    """
    Set of DNS search domains that are used when bare unqualified hostnames are used inside of the container.
    """
    domainname: pulumi.Output[str]
    """
    Domain name of the container.
    """
    entrypoints: pulumi.Output[list]
    """
    The command to use as the
    Entrypoint for the container. The Entrypoint allows you to configure a
    container to run as an executable. For example, to run `/usr/bin/myprogram`
    when starting a container, set the entrypoint to be
    `["/usr/bin/myprogram"]`.
    """
    envs: pulumi.Output[list]
    """
    Environment variables to set.
    """
    exit_code: pulumi.Output[int]
    """
    The exit code of the container if its execution is done (`must_run` must be disabled).
    """
    gateway: pulumi.Output[str]
    """
    *Deprecated:* Use `network_data` instead. The network gateway of the container as read from its
    NetworkSettings.
    """
    healthcheck: pulumi.Output[dict]
    """
    See Healthcheck below for details.
    """
    hosts: pulumi.Output[list]
    """
    Hostname to add.
    """
    hostname: pulumi.Output[str]
    """
    Hostname of the container.
    """
    image: pulumi.Output[str]
    """
    The ID of the image to back this container.
    The easiest way to get this value is to use the `docker_image` resource
    as is shown in the example above.
    """
    ip_address: pulumi.Output[str]
    """
    *Deprecated:* Use `network_data` instead. The IP address of the container's first network it.
    """
    ip_prefix_length: pulumi.Output[int]
    """
    *Deprecated:* Use `network_data` instead. The IP prefix length of the container as read from its
    NetworkSettings.
    """
    labels: pulumi.Output[dict]
    """
    Key/value pairs to set as labels on the
    container.
    """
    links: pulumi.Output[list]
    """
    Set of links for link based
    connectivity between containers that are running on the same host.
    """
    log_driver: pulumi.Output[str]
    """
    The logging driver to use for the container.
    Defaults to "json-file".
    """
    log_opts: pulumi.Output[dict]
    """
    Key/value pairs to use as options for
    the logging driver.
    """
    logs: pulumi.Output[bool]
    """
    Save the container logs (`attach` must be enabled).
    """
    max_retry_count: pulumi.Output[int]
    """
    The maximum amount of times to an attempt
    a restart when `restart` is set to "on-failure"
    """
    memory: pulumi.Output[int]
    """
    The memory limit for the container in MBs.
    """
    memory_swap: pulumi.Output[int]
    """
    The total memory limit (memory + swap) for the
    container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
    """
    must_run: pulumi.Output[bool]
    """
    If true, then the Docker container will be
    kept running. If false, then as long as the container exists, Terraform
    assumes it is successful.
    """
    name: pulumi.Output[str]
    network_aliases: pulumi.Output[list]
    """
    Network aliases of the container for user-defined networks only. *Deprecated:* use `networks_advanced` instead.
    """
    network_datas: pulumi.Output[list]
    """
    (Map of a block) The IP addresses of the container on each
    network. Key are the network names, values are the IP addresses.
    """
    network_mode: pulumi.Output[str]
    """
    Network mode of the container.
    """
    networks: pulumi.Output[list]
    """
    Id of the networks in which the
    container is. *Deprecated:* use `networks_advanced` instead.
    """
    networks_advanced: pulumi.Output[list]
    """
    See Networks Advanced below for details. If this block has priority to the deprecated `network_alias` and `network` properties.
    """
    pid_mode: pulumi.Output[str]
    """
    The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
    """
    ports: pulumi.Output[list]
    """
    See Ports below for details.
    """
    privileged: pulumi.Output[bool]
    """
    Run container in privileged mode.
    """
    publish_all_ports: pulumi.Output[bool]
    """
    Publish all ports of the container.
    """
    restart: pulumi.Output[str]
    """
    The restart policy for the container. Must be
    one of "no", "on-failure", "always", "unless-stopped".
    """
    rm: pulumi.Output[bool]
    """
    If true, then the container will be automatically removed after his execution. Terraform
    won't check this container after creation.
    """
    start: pulumi.Output[bool]
    """
    If true, then the Docker container will be
    started after creation. If false, then the container is only created.
    """
    ulimits: pulumi.Output[list]
    """
    See Ulimits below for
    details.
    """
    uploads: pulumi.Output[list]
    """
    See File Upload below for details.
    """
    user: pulumi.Output[str]
    """
    User used for run the first process. Format is
    `user` or `user:group` which user and group can be passed literraly or
    by name.
    """
    userns_mode: pulumi.Output[str]
    """
    Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
    """
    volumes: pulumi.Output[list]
    """
    See Volumes below for details.
    """
    def __init__(__self__, resource_name, opts=None, attach=None, capabilities=None, command=None, cpu_set=None, cpu_shares=None, destroy_grace_seconds=None, devices=None, dns=None, dns_opts=None, dns_searches=None, domainname=None, entrypoints=None, envs=None, healthcheck=None, hosts=None, hostname=None, image=None, labels=None, links=None, log_driver=None, log_opts=None, logs=None, max_retry_count=None, memory=None, memory_swap=None, must_run=None, name=None, network_aliases=None, network_mode=None, networks=None, networks_advanced=None, pid_mode=None, ports=None, privileged=None, publish_all_ports=None, restart=None, rm=None, start=None, ulimits=None, uploads=None, user=None, userns_mode=None, volumes=None, __name__=None, __opts__=None):
        """
        Manages the lifecycle of a Docker container.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] attach: If true attach to the container after its creation and waits the end of his execution.
        :param pulumi.Input[dict] capabilities: See Capabilities below for details.
        :param pulumi.Input[list] command: The command to use to start the
               container. For example, to run `/usr/bin/myprogram -f baz.conf` set the
               command to be `["/usr/bin/myprogram", "-f", "baz.conf"]`.
        :param pulumi.Input[str] cpu_set: A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
        :param pulumi.Input[int] cpu_shares: CPU shares (relative weight) for the container.
        :param pulumi.Input[int] destroy_grace_seconds: If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
        :param pulumi.Input[list] devices: See Devices below for details.
        :param pulumi.Input[list] dns: Set of DNS servers.
        :param pulumi.Input[list] dns_opts: Set of DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
        :param pulumi.Input[list] dns_searches: Set of DNS search domains that are used when bare unqualified hostnames are used inside of the container.
        :param pulumi.Input[str] domainname: Domain name of the container.
        :param pulumi.Input[list] entrypoints: The command to use as the
               Entrypoint for the container. The Entrypoint allows you to configure a
               container to run as an executable. For example, to run `/usr/bin/myprogram`
               when starting a container, set the entrypoint to be
               `["/usr/bin/myprogram"]`.
        :param pulumi.Input[list] envs: Environment variables to set.
        :param pulumi.Input[dict] healthcheck: See Healthcheck below for details.
        :param pulumi.Input[list] hosts: Hostname to add.
        :param pulumi.Input[str] hostname: Hostname of the container.
        :param pulumi.Input[str] image: The ID of the image to back this container.
               The easiest way to get this value is to use the `docker_image` resource
               as is shown in the example above.
        :param pulumi.Input[dict] labels: Key/value pairs to set as labels on the
               container.
        :param pulumi.Input[list] links: Set of links for link based
               connectivity between containers that are running on the same host.
        :param pulumi.Input[str] log_driver: The logging driver to use for the container.
               Defaults to "json-file".
        :param pulumi.Input[dict] log_opts: Key/value pairs to use as options for
               the logging driver.
        :param pulumi.Input[bool] logs: Save the container logs (`attach` must be enabled).
        :param pulumi.Input[int] max_retry_count: The maximum amount of times to an attempt
               a restart when `restart` is set to "on-failure"
        :param pulumi.Input[int] memory: The memory limit for the container in MBs.
        :param pulumi.Input[int] memory_swap: The total memory limit (memory + swap) for the
               container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
        :param pulumi.Input[bool] must_run: If true, then the Docker container will be
               kept running. If false, then as long as the container exists, Terraform
               assumes it is successful.
        :param pulumi.Input[list] network_aliases: Network aliases of the container for user-defined networks only. *Deprecated:* use `networks_advanced` instead.
        :param pulumi.Input[str] network_mode: Network mode of the container.
        :param pulumi.Input[list] networks: Id of the networks in which the
               container is. *Deprecated:* use `networks_advanced` instead.
        :param pulumi.Input[list] networks_advanced: See Networks Advanced below for details. If this block has priority to the deprecated `network_alias` and `network` properties.
        :param pulumi.Input[str] pid_mode: The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
        :param pulumi.Input[list] ports: See Ports below for details.
        :param pulumi.Input[bool] privileged: Run container in privileged mode.
        :param pulumi.Input[bool] publish_all_ports: Publish all ports of the container.
        :param pulumi.Input[str] restart: The restart policy for the container. Must be
               one of "no", "on-failure", "always", "unless-stopped".
        :param pulumi.Input[bool] rm: If true, then the container will be automatically removed after his execution. Terraform
               won't check this container after creation.
        :param pulumi.Input[bool] start: If true, then the Docker container will be
               started after creation. If false, then the container is only created.
        :param pulumi.Input[list] ulimits: See Ulimits below for
               details.
        :param pulumi.Input[list] uploads: See File Upload below for details.
        :param pulumi.Input[str] user: User used for run the first process. Format is
               `user` or `user:group` which user and group can be passed literraly or
               by name.
        :param pulumi.Input[str] userns_mode: Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
        :param pulumi.Input[list] volumes: See Volumes below for details.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['attach'] = attach

        __props__['capabilities'] = capabilities

        __props__['command'] = command

        __props__['cpu_set'] = cpu_set

        __props__['cpu_shares'] = cpu_shares

        __props__['destroy_grace_seconds'] = destroy_grace_seconds

        __props__['devices'] = devices

        __props__['dns'] = dns

        __props__['dns_opts'] = dns_opts

        __props__['dns_searches'] = dns_searches

        __props__['domainname'] = domainname

        __props__['entrypoints'] = entrypoints

        __props__['envs'] = envs

        __props__['healthcheck'] = healthcheck

        __props__['hosts'] = hosts

        __props__['hostname'] = hostname

        if image is None:
            raise TypeError('Missing required property image')
        __props__['image'] = image

        __props__['labels'] = labels

        __props__['links'] = links

        __props__['log_driver'] = log_driver

        __props__['log_opts'] = log_opts

        __props__['logs'] = logs

        __props__['max_retry_count'] = max_retry_count

        __props__['memory'] = memory

        __props__['memory_swap'] = memory_swap

        __props__['must_run'] = must_run

        __props__['name'] = name

        __props__['network_aliases'] = network_aliases

        __props__['network_mode'] = network_mode

        __props__['networks'] = networks

        __props__['networks_advanced'] = networks_advanced

        __props__['pid_mode'] = pid_mode

        __props__['ports'] = ports

        __props__['privileged'] = privileged

        __props__['publish_all_ports'] = publish_all_ports

        __props__['restart'] = restart

        __props__['rm'] = rm

        __props__['start'] = start

        __props__['ulimits'] = ulimits

        __props__['uploads'] = uploads

        __props__['user'] = user

        __props__['userns_mode'] = userns_mode

        __props__['volumes'] = volumes

        __props__['bridge'] = None
        __props__['container_logs'] = None
        __props__['exit_code'] = None
        __props__['gateway'] = None
        __props__['ip_address'] = None
        __props__['ip_prefix_length'] = None
        __props__['network_datas'] = None

        super(Container, __self__).__init__(
            'docker:index/container:Container',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

